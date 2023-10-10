import { Button } from '@lebernardo/react'
import { PencilSimple, TrashSimple } from 'phosphor-react'

const styles = {
  table: 'w-full border-collapse',
  tableRow: 'py-2 px-4 border-2 border-solid border-gray600',
}

type DatatableProps = {
  items: Array<object>
  columns: Array<string>
  actionPrimary: (item: object) => void
  actionSecondary: (item: object) => void
}

const Datatable = ({
  items,
  columns,
  actionPrimary,
  actionSecondary,
}: DatatableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        {columns.map((column) => (
          <th className={styles.tableRow} key={column}>
            {column}
          </th>
        ))}
        <th className={styles.tableRow}>Actions</th>
      </thead>
      {items.map((item, i) => (
        <tbody key={i}>
          {columns.map((column) => (
            <td key={`value-${column}`} className={styles.tableRow}>
              {item[column]}
            </td>
          ))}
          <td className={styles.tableRow}>
            <div className="flex items-center justify-center gap-2">
              <Button
                className="p-3 min-w-0 flex items-center justify-center"
                variant="outline"
                onClick={() => actionPrimary(item)}
              >
                <PencilSimple />
              </Button>
              <Button
                className="p-3 min-w-0 flex items-center justify-center"
                variant="outline"
                onClick={() => actionSecondary(item)}
              >
                <TrashSimple />
              </Button>
            </div>
          </td>
        </tbody>
      ))}
    </table>
  )
}

export default Datatable
