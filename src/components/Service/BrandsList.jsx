import Brands from "./Brands";

const BrandsList = ({ brandslist }) => {
    return (
        <div className="py-24 bg-blue-100">
            <h2 className="text-5xl font-bold text-center mb-10 text-cyan-900">Brands in Our Website </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 m-4 sm:m-8 md:m-10 ">
                {brandslist?.map((brand) => (
                    <div key={brand.id} className="flex items-center justify-center">
                        <Brands brand={brand}></Brands>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsList;
