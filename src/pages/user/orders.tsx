/* eslint-disable react/jsx-key */
import { Heading, Text, Card } from '@lebernardo/react'
import { getUserOrders } from '@/api/user'
import Page from '@/components/common/Page'
import styles from './styles'
import { useQuery } from 'react-query'
import { useStore } from '@/stores'
import { useMemo } from 'react'
import { formatDecimalToReal } from '@/helpers/products'
import { getOrderStatus } from '@/helpers/order'
import NotFoundOrders from '@/components/NotFound/Orders'
import Image from 'next/image'

function UserOrders() {
  const { userID, userToken } = useStore((state) => ({
    userID: state.user?.id,
    userToken: state.user?.token,
  }))

  const { data } = useQuery(['orders'], () =>
    getUserOrders(userID || 0, userToken),
  )
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
                      userOrder.order_products.map((orderItem) => (
                        <div className="flex gap-8 border-t-2 border-solid border-gray600 pt-4">
                          <Image
                            src={orderItem?.product?.image}
                            alt={orderItem?.product?.name}
                            className="w-28 aspect-square object-cover"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                          <div>
                            {orderItem?.product?.name}
                            <br />
                            <br />
                            <Text size="sm">
                              Valor Pago:{' '}
                              {formatDecimalToReal(orderItem?.price)}
                            </Text>
                            <Text size="sm">
                              Quantidade: {orderItem?.quantity}
                            </Text>
                          </div>
                        </div>
                      ))}
                  </div>
                </Card>
              ))}
            {userOrders && userOrders.length === 0 && <NotFoundOrders />}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default UserOrders
