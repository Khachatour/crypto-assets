import './TabElement.scss'

type TabElementProps = {
  label: string,
  icon: React.ComponentType,
  active: boolean,
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

const TabElement = ({ label, icon: Icon, onClick, active }: TabElementProps) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(e.code === 'Space' || e.code === 'Enter') {
      onClick && onClick(e)
    }
  }

  return (
    <div 
      tabIndex={0} 
      onClick={onClick} 
      data-active={active}
      className="container" 
      onKeyDown={handleKeyDown}
    >
      <Icon />
      {label}
    </div>
  )
}

export default TabElement;