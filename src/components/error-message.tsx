export function ErrorMessage({ error }: { error?: string[] }) {
  if (!error) {
    return null
  }

  return <p className="text-sm text-red-500">{error[0]}</p>
}
