

const Hasan = () => {
    return (
        <div className="h-1/2 w-full mt-6">
            <div className="text-purple-100 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bgHasan3.avif)' }}>

                <div className="flex justify-between gap-4 pt-6 px-4 text-4xl">
                    <p>Name: Mahmudul Hasan</p>
                    <p>Address: Duisburg</p>
                </div>
                <div className="grid justify-items-center">
                    <img className="mask mask-circle" src="https://i.ibb.co/j6ZFF8w/hasan.jpg" alt="" />
                </div>
                <div className="flex justify-between gap-4 pt-6 px-4 text-4xl">

                    <p>Email: shantohasan1983@gmail.com</p>
                    <p>Mobile: 017631175754</p>
                </div>

            </div>
        </div >

    );
};

export default Hasan;