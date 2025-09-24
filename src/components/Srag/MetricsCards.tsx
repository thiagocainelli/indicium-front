import { motion } from "framer-motion";
import { Card, Tooltip, Typography } from "antd";
import {
  RiseOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

type MetricsCardsProps = {
  metrics?: SragMetricsDto;
};

export function MetricsCards({ metrics }: MetricsCardsProps) {
  const cards = [
    {
      title: "Aumento de Casos",
      value: metrics?.caseIncreaseRate ?? 0,
      icon: <RiseOutlined className="text-2xl" />,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      tooltip: "Variação percentual de casos em relação ao período anterior.",
    },
    {
      title: "Taxa de Mortalidade",
      value: metrics?.mortalityRate ?? 0,
      icon: <HeartOutlined className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      tooltip: "Proporção de óbitos entre os casos no período.",
    },
    {
      title: "Ocupação de UTI",
      value: metrics?.icuOccupancyRate ?? 0,
      icon: <MedicineBoxOutlined className="text-2xl" />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      tooltip: "Proporção de internações em UTI entre os casos.",
    },
    {
      title: "Taxa de Vacinação",
      value: metrics?.vaccinationRate ?? 0,
      icon: <SafetyOutlined className="text-2xl" />,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      tooltip: "Proporção de vacinados entre os casos registrados.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={card.title}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              },
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="themed-card h-full">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${card.bgColor}`}>
                  <div className={card.iconColor}>{card.icon}</div>
                </div>
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${card.color}`}
                />
              </div>

              <Tooltip title={card.tooltip}>
                <div>
                  <Text className="text-gray-600 text-sm font-medium block mb-2">
                    {card.title}
                  </Text>
                  <div className="flex items-baseline space-x-2">
                    <Text
                      className={`text-3xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                    >
                      {card.value.toFixed(2)}
                    </Text>
                    <Text className="text-gray-500 text-lg">%</Text>
                  </div>
                </div>
              </Tooltip>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
