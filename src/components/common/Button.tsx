import { Button } from "@nextui-org/react";

interface ButtonProps {
    children: React.ReactNode,
    onClick: () => void
}



const ButtonReutilizable: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <Button  color="secondary" variant="bordered" onClick={onClick}>{children}</Button>
  )
}
export default ButtonReutilizable