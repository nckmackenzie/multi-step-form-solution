import Section from '../ui/Section';
import { addons } from '../../data/data';
import Addon from './Addon';

const Addons = () => {
  return (
    <Section
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
    >
      <div className="flex flex-col gap-4">
        {addons &&
          addons.length > 0 &&
          addons.map(addon => <Addon key={addon.name} {...addon} />)}
      </div>
    </Section>
  );
};

export default Addons;
