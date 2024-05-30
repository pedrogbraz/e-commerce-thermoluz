import { ReactNode } from "react"

interface ContainerProps {
  content: ReactNode | string;
  color?: string
}

export default function Container({ content, color }: ContainerProps) {
  return (
    <div className={`flex flex-col ${color} px-5 py-8 rounded-xl md:py-10`}>
      <div>
        {content}
      </div>
    </div>
  )
}