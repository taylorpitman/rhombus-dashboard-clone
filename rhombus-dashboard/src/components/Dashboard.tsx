
import WalletIcon from '../assets/icons/general_stats_small/ic_account_balance_wallet.svg';
import DealsIcon from '../assets/icons/general_stats_small/ic_deals.svg';
import TrendIcon from '../assets/icons/general_stats_small/ic_trending_up.svg';
import SendIcon from '../assets/icons/general_stats_small/ic_send.svg';
import StatCardSmall from './cards/Small/StatCardSmall';
import StatCardLg from './cards/Large/StatCardLg';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-3">

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
            <div className="flex justify-center gap-3 ">
                <StatCardLg
                    title="Emails Sent Total"
                    subtitle="March 2020"
                    chartType="pie"
                    chartData={[
                        { label: 'Sent', value: 300 },
                        { label: 'Failed', value: 50 },
                        { label: 'Pending', value: 150 }
                      ]}
                />
                <StatCardLg
                    title="Emails Sent Total"
                    subtitle="March 2020"
                    chartType="pie"
                />
                <StatCardLg
                    title="Emails Sent Total"
                    subtitle="March 2020"
                    chartType="pie"
                />
            </div>
        </div>
    );
}

export default Dashboard;