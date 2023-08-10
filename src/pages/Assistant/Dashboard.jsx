// import Navbar from '../../components/Navbar'
// import Sidebar from '../../components/oaSidebar'
import StateCard from '../../components/DashboardStateCard'
import { Chart, initTE,} from "tw-elements";

const Dashboard = () => {

  initTE({ Chart });

  // Data
  const dataChartBarDoubleDatasetsExample = {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Last week',
          data: [510, 653, 255, 510, 653, 255, 390],
          // data: [510, 653, 255],
          backgroundColor: '#111111',
        },
        {
          label: 'This week',
          data: [1251, 1553, 1355, 1251, 1553, 1355, 1211],
          // data: [1251, 1553, 1355],
          backgroundColor: '#D3D3D4',
          // borderColor: '#94DFD7',
        },
      ],
    },
  };

  // Options
  const optionsChartBarDoubleDatasetsExample = {
    options: {
      scales: {
        y:
          {
            stacked: false,
            ticks: {
              beginAtZero: true,
            },
          },
        x:
          {
            stacked: false,
          },
      },
    },
  };

  const assistantStateBoxItems = [
    {
        cardtitle: 'ORDERS',
        bigcount: '89',
        percentagevalue: '1.10%',
    },
    {
      cardtitle: 'ORDERS',
      bigcount: '89',
      percentagevalue: '1.10%',
    },
    {
      cardtitle: 'ORDERS',
      bigcount: '89',
      percentagevalue: '1.10%',
    },
    {
      cardtitle: 'ORDERS',
      bigcount: '89',
      percentagevalue: '1.10%',
    },
  ]

  new Chart(
    document.getElementById('chart-bar-double-datasets-example'),
    dataChartBarDoubleDatasetsExample,
    optionsChartBarDoubleDatasetsExample
  );

  return (
    <div className=" flex flex-col justify-between m-9 gap-7">
      {/* <Sidebar />
      <Navbar /> */}

      <div className=" flex justify-between flex-wrap gap-7">
        <StateCard items={assistantStateBoxItems} />
        <StateCard items={assistantStateBoxItems} />
        <StateCard items={assistantStateBoxItems} />
        <StateCard items={assistantStateBoxItems} />
      </div>

      <div className=" flex justify-between gap-5">
        <div className=" w-7/12 h-96 p-4 border border-solid border-zinc-950 border-opacity-20 rounded-lg bg-stone-50">
          <div>PERFORMANCE</div>
          <canvas id="chart-bar-double-datasets-example"></canvas>
        </div>
        <div className=" w-5/12 h-96 p-4 border border-solid border-zinc-950 border-opacity-20 rounded-lg bg-stone-50"></div>
      </div>
      
    </div>
  )
}


export default Dashboard