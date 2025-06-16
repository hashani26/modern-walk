export default function SectionTitle({
  title,
  style,
}: {
  title: string
  style: string
}) {
  return <h2 className={`font-semibold ${style}`}>{title}</h2>
}
