import DashBoard from '../components/Dashboard';



const Home = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 outline-1 ">    
            <div className="w-full max-w-5xl ">
                <DashBoard />
            </div>
        </div>
    )
}

export default Home;