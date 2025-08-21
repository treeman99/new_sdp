import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  /** 현재 선택된 항목 */
  selectedValue: string;
  /** 선택 가능한 항목들의 배열 */
  options: string[];
  /** 선택 변경 시 호출되는 함수 */
  onSelectionChange: (value: string) => void;
  /** 드롭다운 트리거 컴포넌트 (버튼 등) */
  trigger: React.ReactNode;
  /** 드롭다운 위치 조정 (기본값: 'bottom') */
  position?: 'bottom' | 'bottom-overlap';
  /** 드롭다운 너비 */
  width?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedValue,
  options,
  onSelectionChange,
  trigger,
  position = 'bottom',
  width = '10rem',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    onSelectionChange(option);
    setIsOpen(false);
  };

  // 위치에 따른 top 값 계산
  const getTopPosition = () => {
    switch (position) {
      case 'bottom-overlap':
        return 'calc(100% - 0.5rem)';
      case 'bottom':
      default:
        return '100%';
    }
  };

  return (
    <div 
      ref={dropdownRef}
      style={{
        position: 'relative'
      }}
    >
      {/* Trigger Element */}
      <div 
        onClick={handleToggleDropdown}
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1
        }}
      >
        {trigger}
      </div>

      {/* Dropdown List */}
      {isOpen && !disabled && (
        <div
          style={{
            position: 'absolute',
            top: getTopPosition(),
            left: '0',
            zIndex: 9999,
            display: 'flex',
            width: width,
            padding: '0.375rem 0.0625rem',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: '0.125rem',
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            boxShadow: '0 0 2px 0 rgba(40, 48, 55, 0.12), 0 8px 14px 4px rgba(40, 48, 55, 0.14)',
            marginTop: position === 'bottom' ? '0.25rem' : '0'
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSelectOption(option);
              }}
              style={{
                display: 'flex',
                padding: '0 0.5rem 0 0.625rem',
                alignItems: 'center',
                gap: '0.5rem',
                alignSelf: 'stretch',
                background: selectedValue === option 
                  ? 'var(--Color-bg-on_item-list-datatable-Hover, rgba(40, 48, 55, 0.08))' 
                  : 'var(--Colors-Neutral-Neutral_01-FFFFFF, #FFF)',
                cursor: 'pointer',
                borderRadius: '0.125rem'
              }}
              onMouseEnter={(e) => {
                if (selectedValue !== option) {
                  (e.target as HTMLElement).style.background = 'rgba(40, 48, 55, 0.04)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedValue !== option) {
                  (e.target as HTMLElement).style.background = '#FFF';
                }
              }}
            >
              <div
                style={{
                  display: 'flex',
                  height: '1.625rem',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flex: '1 0 0',
                  overflow: 'hidden',
                  color: 'var(--Colors-Neutral-Neutral_17-283037, #283037)',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontFamily: 'SamsungOneKoreanNoF',
                  fontSize: '0.875rem',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.25rem',
                  letterSpacing: '0.05rem'
                }}
              >
                {option}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
