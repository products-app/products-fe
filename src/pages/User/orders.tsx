/* eslint-disable react/jsx-key */
import { Heading, Text, Card } from '@lebernardo/react'
import { getUserOrders } from '@/api/user'
import Page from '@/components/Page'
import styles from './styles'
import { useQuery } from 'react-query'
import { useUserStore } from '@/store/user'
import { useMemo } from 'react'
import { formatDecimalToReal } from '@/helpers/products'
import { getOrderStatus } from '@/helpers/order'

function UserOrders() {
  const userID = useUserStore((state) => state.userID)

  const { data } = useQuery(['orders'], () => getUserOrders(userID || 0))
  const userOrders = useMemo(() => data?.data, [data])

  return (
    <Page>
      <div className={styles.containerRegister}>
        <div className={styles.col2}>
          <div className="w-full">
            <div className="text-center mb-4 font-heading">
              <Heading>Pedidos</Heading>
              <Text className="text-gray400">Estes são seus pedidos.</Text>
            </div>

            {userOrders &&
              userOrders.map((userOrder) => (
                <Card className="mb-3">
                  <div className="flex justify-between">
                    <div>
                      <Heading>Pedido #{userOrder.id}</Heading>
                      <Text>
                        Total:{' '}
                        <span className="text-base300">
                          {formatDecimalToReal(userOrder.total)}
                        </span>
                      </Text>
                    </div>
                    <div>
                      <Text>
                        Status:{' '}
                        <strong className="text-base300">
                          {getOrderStatus(userOrder.status)}
                        </strong>
                      </Text>
                    </div>
                  </div>

                  <div className="mt-4">
                    {userOrder.order_products &&
                      userOrder.order_products.map((order_item) => (
                        <div className="flex gap-8 border-t-2 border-solid border-gray600 pt-4">
                          <img
                            src={order_item?.product?.image}
                            className="w-28 aspect-square object-cover"
                          />
                          <Text size="lg">
                            {order_item?.product?.name}
                            <br />
                            <br />
                            <Text size="sm">
                              Valor Pago:{' '}
                              {formatDecimalToReal(order_item?.price)}
                            </Text>
                            <Text size="sm">
                              Quantidade: {order_item?.quantity}
                            </Text>
                          </Text>
                        </div>
                      ))}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default UserOrders
