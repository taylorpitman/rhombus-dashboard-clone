import DashBoard from '../components/Dashboard';



const Home = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">    
            <div className="w-screen max-w-5xl ">
                <DashBoard />
            </div>
        </div>
    )
}

export default Home;