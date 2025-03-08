import PropTypes from 'prop-types';

export default function Tab({ tabData, field, setField }) {
    return (
        <div
            style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"
        >
            {tabData.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setField(tab.type)}
                    className={`${field === tab.type
                        ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200"
                    } py-2 px-5 rounded-full transition-all duration-200`}
                >
                    {tab?.tabName}
                </button>
            ))}
        </div>
    );
}

// PropTypes validation
Tab.propTypes = {
    tabData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            tabName: PropTypes.string.isRequired,
        })
    ).isRequired,
    field: PropTypes.string.isRequired,
    setField: PropTypes.func.isRequired,
};
