

const Header = (props) => {
    return (
        <div className="w-full bg-gray-300 py-3">
          <h1 className="text-center font-bold text-lg">{props.title}</h1>
        </div>
    );
};

export default Header;