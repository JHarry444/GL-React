import trainers from '../trainers.json';
import Trainer from './Trainer';

function Trainers() {
  return (
    <>
      { trainers.map(({ id, name, age }) => <Trainer key={id} name={name} age={age} />)}
    </>
  );
}

export default Trainers;
