
import WalletIcon from '../assets/icons/general_stats_small/ic_account_balance_wallet.svg';
import DealsIcon from '../assets/icons/general_stats_small/ic_deals.svg';
import TrendIcon from '../assets/icons/general_stats_small/ic_trending_up.svg';
import SendIcon from '../assets/icons/general_stats_small/ic_send.svg';
import StatCardSmall from './cards/Small/StatCardSmall';
import StatCardLg from './cards/Large/StatCardLg';

const Dashboard = () => {
    return (
        <div className="">

            {/* Small Stat Card Row*/}
            <div className="flex justify-center gap-3 ">
                    <StatCardSmall
                        value="$22,880.50"
                        subtitle="Won from 18 Deals"
                        percentage={67}
                        icon={<img src={DealsIcon} alt="Deals icon" className="w-6 h-6" 
                        color = "primary"/>}
                    />
                    <StatCardSmall
                        value="$1,096.30"
                        subtitle="Daily average income"
                        percentage={18}
                        icon={<img src={WalletIcon} alt="wallet icon" className="w-6 h-6" 
                        color = "primary"/>}
                    />
                    <StatCardSmall
                        value="33.98%"
                        subtitle="Lead coversation"
                        percentage={78}
                        icon={<img src={TrendIcon} alt="Trend icon" className="w-6 h-6" 
                        color = "primary"/>}
                    />
                    <StatCardSmall
                        value="778"
                        subtitle="Campaign sent"
                        percentage={80}
                        icon={<img src={SendIcon} alt="Send icon" className="w-6 h-6" 
                        color = "primary"/>}
                    />
            </div>

            {/* Large Stat Card Row */}
            <div className="flex justify-center ">
                <StatCardLg
                    title="General Statistics"
                    subtitle="Overview of your business performance"
                    chartType="bar"
                    chartData={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [
                            {
                                label: 'Revenue',
                                data: [1200, 1900, 3000, 5000, 2000, 3000],
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            },
                            {
                                label: 'Expenses',
                                data: [800, 1200, 1500, 2000, 1000, 1500],
                                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
}

export default Dashboard;