import ConfigureComponent from '@/components/configure/ConfigureComponent';
import ProductSpecifications from '@/components/configure/ProductSpecifications';
import NewDetails from './Service/NewDetails';

const Configure = () => {
	return (
		<div className="pt-16">
			<NewDetails />
			<ConfigureComponent />
			<ProductSpecifications />
		</div>
	);
};

export default Configure;
