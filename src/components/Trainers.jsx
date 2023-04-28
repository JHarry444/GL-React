import trainers from '../trainers.json';
import Trainer from './Trainer';

function Trainers() {
  return (
    <>
      <h2>Static Data</h2>
      { trainers.map(({ id, name, age }) => <Trainer key={id} name={name} age={age} />)}
    </>
  );
}

export default Trainers;
