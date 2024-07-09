import c from './CirclePreloader.module.scss'

type Props = {
  className?: string
}

export function CirclePreloader({ className }: Props) {
  return <div className={c.circle + ' ' + className}></div>
}