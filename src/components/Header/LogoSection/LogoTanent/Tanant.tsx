import React, { useState, useRef, useEffect } from 'react';

interface TanantProps {
  selectedTenant: string;
  onTenantChange: (tenant: string) => void;
}

const Tanant: React.FC<TanantProps> = ({ selectedTenant, onTenantChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log('Tanant component rendered with selectedTenant:', selectedTenant);
  console.log('isDropdownOpen state:', isDropdownOpen);

  const dropdownItems = [
    'SENSDES-RND',
    'Project Name',
    'SENSER Test Chip',
    'Megabox',
    'CGV'
  ];

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    console.log('🔵 handleToggleDropdown called!');
    console.log('🔵 Current isDropdownOpen state:', isDropdownOpen);
    console.log('🔵 About to set isDropdownOpen to:', !isDropdownOpen);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectItem = (item: string) => {
    console.log('🟢 handleSelectItem called with item:', item);
    onTenantChange(item);
    setIsDropdownOpen(false);
  };

  return (
    <div 
      ref={dropdownRef}
      style={{
        position: 'relative'
      }}
    >
      <button 
        onClick={(e) => {
          console.log('🔴 Button clicked!');
          console.log('🔴 Event object:', e);
          e.preventDefault();
          e.stopPropagation();
          console.log('🔴 About to call handleToggleDropdown');
          handleToggleDropdown();
        }}
        style={{
          display: 'flex',
          height: '2.5rem',
          alignItems: 'center',
          borderRadius: '0.125rem',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0'
        }}
      >
        {/* InnerBox */}
        <div 
          style={{
            display: 'flex',
            padding: '0',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.25rem',
            borderRadius: '0'
          }}
        >
          {/* TitleContainer */}
          <div 
            style={{
              display: 'flex',
              padding: '0.25rem 0.375rem 0.25rem 0.5rem',
              alignItems: 'center',
              gap: '0.25rem',
              borderRadius: '0.125rem'
            }}
          >
            {/* TitleText */}
            <div 
              style={{
                display: 'flex',
                paddingTop: '0.25rem',
                alignItems: 'center',
                gap: '0.625rem',
                color: '#FFFFFF'
              }}
            >
              <div 
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  color: '#FFFFFF',
                  textOverflow: 'ellipsis',
                  fontFamily: '"Samsung Sharp Sans"',
                  fontSize: '0.8125rem',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '1rem',
                  letterSpacing: '0.05rem'
                }}
              >
                {selectedTenant}
              </div>
            </div>
            
            {/* ButtonContainer */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.125rem'
              }}
            >
              {/* IconButton */}
              <div 
                style={{
                  display: 'flex',
                  width: '1rem',
                  height: '1rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '0.125rem'
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    width: '1rem',
                    height: '1rem',
                    padding: '0.0625rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0
                  }}
                >
                  <div 
                    style={{
                      width: '0.875rem',
                      height: '0.875rem',
                      flexShrink: 0
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M11.0001 5L7.00001 8.99996L3.00011 5" stroke="#EDF2F4" strokeWidth="1.2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Dropdown List */}
      {(() => {
        console.log('🟡 Checking if dropdown should render. isDropdownOpen:', isDropdownOpen);
        return isDropdownOpen;
      })() && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% - 0.5rem)',
            left: '0',
            zIndex: 9999,
            display: 'flex',
            width: '10rem',
            padding: '0.375rem 0.0625rem',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: '0.125rem',
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            boxShadow: '0 0 2px 0 rgba(40, 48, 55, 0.12), 0 8px 14px 4px rgba(40, 48, 55, 0.14)',
            marginTop: '0'
          }}
        >
          {dropdownItems.map((item, index) => {
            console.log('🟣 Rendering dropdown item:', item, 'at index:', index);
            return (
              <div
                key={index}
                onClick={(e) => {
                  console.log('🟠 Dropdown item clicked:', item);
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelectItem(item);
                }}
                style={{
                display: 'flex',
                padding: '0 0.5rem 0 0.625rem',
                alignItems: 'center',
                gap: '0.5rem',
                alignSelf: 'stretch',
                background: selectedTenant === item 
                  ? 'var(--Color-bg-on_item-list-datatable-Hover, rgba(40, 48, 55, 0.08))' 
                  : 'var(--Colors-Neutral-Neutral_01-FFFFFF, #FFF)',
                cursor: 'pointer'
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
                {item}
              </div>
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Tanant;
