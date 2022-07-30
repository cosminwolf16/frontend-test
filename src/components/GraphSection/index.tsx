import {
  AgePerIndustry,
  SalaryPerIndustry,
  SalaryPerYears,
} from 'models/models';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from 'styles/GraphSection.module.scss';

interface GraphSectionProps {
  title: string;
  data: SalaryPerYears[] | SalaryPerIndustry[] | AgePerIndustry[];
  content: { primaryDataKey: string; secondDataKey: string };
}

export const GraphSection: React.FC<GraphSectionProps> = ({
  title,
  data,
  content,
}) => {
  const { primaryDataKey, secondDataKey } = content;

  return (
    <div className={styles.graphSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <ResponsiveContainer width={'100%'} height={'100%'} aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={primaryDataKey}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey={secondDataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphSection;
