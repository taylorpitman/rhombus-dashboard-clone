
import WalletIcon from '../assets/icons/general_stats_small/ic_account_balance_wallet.svg';
import DealsIcon from '../assets/icons/general_stats_small/ic_deals.svg';
import TrendIcon from '../assets/icons/general_stats_small/ic_trending_up.svg';
import SendIcon from '../assets/icons/general_stats_small/ic_send.svg';
import StatCardSmall from './cards/Small/StatCardSmall';
import StatCardLg from './cards/Large/StatCardLg';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-3  w-full">

            {/* Small Stat Card Row*/}
            <div className="flex justify-center gap-3  md:flex-nowrap flex-wrap">
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
            <div className="flex justify-center gap-3 md:flex-nowrap flex-wrap">
                <StatCardLg
                    title="Emails Sent Total"
                    subtitle="March 2020"
                    chartType="pie"
                    pieData={[
                        { label: 'send', value: 860 },
                        { label: 'open', value: 234 },
                        { label: 'spam', value: 730 }
                      ]}
                />
                <StatCardLg
                    title="Income Amounts"
                    chartType="bar"
                    barData={[
                        { day: 'Mon', lastMonth: 400, lastWeek: 300, thisWeek: 200 },
                        { day: 'Tue', lastMonth: 300, lastWeek: 200, thisWeek: 100 },
                        { day: 'Wed', lastMonth: 200, lastWeek: 100, thisWeek: 50 },
                        { day: 'Thu', lastMonth: 500, lastWeek: 400, thisWeek: 300 },
                        { day: 'Fri', lastMonth: 600, lastWeek: 500, thisWeek: 400 },
                    ]}
                    target={500}
                />
                <StatCardLg
                    title="Revenue"
                    subtitle="March"
                    chartType="line"
                    lineData={[
                        { value: 310 },
                        { value: 300 },
                        { value: 285 },
                        { value: 270 },
                        { value: 260 },
                        { value: 250 },
                        { value: 255 },
                        { value: 265 },
                        { value: 270 },
                        { value: 280 },
                        { value: 295 },
                        { value: 310 },
                        { value: 300 },
                        { value: 320 },
                        { value: 340 },
                        { value: 360 },
                        { value: 375 },
                        { value: 390 },
                        { value: 405 },
                        { value: 420 },
                        { value: 415 },
                        { value: 410 },
                        { value: 400 },
                        { value: 390 },
                        { value: 380 },
                    ]}
                />
            </div>

            
        </div>
    );
}

export default Dashboard;