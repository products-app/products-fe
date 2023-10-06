import {
  Checkbox,
  Heading,
  TextInput,
  Text,
  Card,
  TextArea,
  Button,
} from '@lebernardo/react'

const styles = {
  container: 'max-w-3xl m-auto py-12',
  col2: 'flex items-center gap-2',
  card: 'flex flex-col gap-8',
  inputWrapper: 'flex flex-col gap-2 w-full',
  checkboxWrapper: 'flex flex-row gap-2 items-center',
  actionsWrapper: 'flex items-center gap-4 justify-end',
}

function ProductAdd() {
  return (
    <div className={styles.container}>
      <div className="text-center mb-4 font-heading">
        <Heading>Cadastrar Produto</Heading>
        <Text>
          Adicione informações do produto. Você pode editar essas informações
          depois.
        </Text>
      </div>

      <Card className={styles.card}>
        <div className={styles.inputWrapper}>
          <Text size="sm">Imagem</Text>
          <TextInput name="image" text="url" />
          {/* <Button variant="outline" size="small">Selecione uma imagem</Button> */}
        </div>

        <div className={styles.inputWrapper}>
          <Text size="sm">Nome</Text>
          <TextInput name="name" />
        </div>

        <div className={styles.inputWrapper}>
          <Text size="sm">Descrição</Text>
          <TextArea />
        </div>

        <div className={styles.col2}>
          <div className={styles.inputWrapper}>
            <Text size="sm">Preço</Text>
            <TextInput name="price" type="number" prefix="R$ " />
          </div>

          <div className={styles.inputWrapper}>
            <Text size="sm">Estoque</Text>
            <TextInput name="stock" type="number" />
          </div>
        </div>

        <div className={styles.checkboxWrapper}>
          <Checkbox />
          <Text size="sm" as="label">
            Ativo
          </Text>
        </div>

        <div className={styles.actionsWrapper}>
          <Button>Salvar</Button>
          <Button variant="outline">Cancelar</Button>
        </div>
      </Card>
    </div>
  )
}

export default ProductAdd
