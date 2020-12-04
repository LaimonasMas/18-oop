import { Parrot } from './animals/Parrot.js';
import { Chicken } from './animals/Chicken.js';

const kapitonas = new Parrot('Kapitonas');
kapitonas.introduce()

const jack = new Parrot('Jack', 'juodas');
jack.introduce();

const cypsius = new Chicken('Cypsius', 'geltonas');
cypsius.introduce();

const pypsius = new Chicken('Pypsius');
pypsius.introduce();