export function EmptyBlock({
  message = 'Nenhum dado encontrado.',
}: {
  message?: string
}) {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px] border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
      <div className="text-center">
        <span className="mt-2 text-sm font-medium text-gray-900">
          {message}
        </span>
      </div>
    </div>
  )
}
