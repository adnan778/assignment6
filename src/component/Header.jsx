

const Header = () => {
    let title="My React Application" 
    return (
        <div className="w-full bg-gray-300 py-3">
          <h1 className="text-center font-bold text-lg">{title}</h1>
        </div>
    );
};

export default Header;