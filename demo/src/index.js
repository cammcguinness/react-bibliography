import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'


var bib = `@article{ashlock2011search,
  title={Search-based procedural generation of maze-like levels},
  author={Ashlock, Daniel and Lee, Colin and McGuinness, Cameron},
  journal={IEEE Transactions on Computational Intelligence and AI in Games},
  volume={3},
  number={3},
  pages={260--273},
  year={2011},
  publisher={IEEE}
}
@article{ashlock2011simultaneous,
  title={Simultaneous dual level creation for games},
  author={Ashlock, Daniel and Lee, Colin and McGuinness, Cameron},
  journal={IEEE Computational Intelligence Magazine},
  volume={6},
  number={2},
  pages={26--37},
  year={2011},
  publisher={IEEE}
}
@inproceedings{mcguinness2011decomposing,
  title={Decomposing the level generation problem with tiles},
  author={McGuinness, Cameron and Ashlock, Daniel},
  booktitle={Evolutionary Computation (CEC), 2011 IEEE Congress on},
  pages={849--856},
  year={2011},
  organization={IEEE}
}
@inproceedings{mcguinness2011incorporating,
  title={Incorporating required structure into tiles},
  author={McGuinness, Cameron and Ashlock, Daniel},
  booktitle={Computational Intelligence and Games (CIG), 2011 IEEE Conference on},
  pages={16--23},
  year={2011},
  organization={IEEE}
}
@inproceedings{ashlock2013landscape,
  title={Landscape automata for search based procedural content generation},
  author={Ashlock, Daniel and McGuinness, Cameron},
  booktitle={Computational Intelligence in Games (CIG), 2013 IEEE Conference on},
  pages={1--8},
  year={2013},
  organization={IEEE}
}
@inproceedings{ashlock2012representation,
  title={Representation in evolutionary computation},
  author={Ashlock, Daniel and McGuinness, Cameron and Ashlock, Wendy},
  booktitle={IEEE World Congress on Computational Intelligence},
  pages={77--97},
  year={2012},
  organization={Springer Berlin Heidelberg}
}
@inproceedings{ashlock2014automatic,
  title={Automatic generation of fantasy role-playing modules},
  author={Ashlock, Daniel and McGuinness, Cameron},
  booktitle={Computational Intelligence and Games (CIG), 2014 IEEE Conference on},
  pages={1--8},
  year={2014},
  organization={IEEE}
}
@inproceedings{mcguinness2012statistical,
  title={Statistical Analyses of Representation Choice in Level Generation},
  author={McGuinness, Cameron},
  booktitle={Computational Intelligence and Games},
  year={2012},
  organization={IEEE}
}
@phdthesis{mcguinness2016monte,
  title={Monte Carlo Tree Search: Analysis and Applications},
  author={McGuinness, Cameron},
  year={2016}
}
@inproceedings{mcguinness2016classification,
  title={Classification of Monte Carlo tree search variants},
  author={McGuinness, Cameron},
  booktitle={Evolutionary Computation (CEC), 2016 IEEE Congress on},
  pages={357--363},
  year={2016},
  organization={IEEE}
}
@inproceedings{ashlock2015evolving,
  title={Evolving point packings in the plane},
  author={Ashlock, Daniel and Hingston, Philip and McGuinness, Cameron},
  booktitle={Australasian Conference on Artificial Life and Computational Intelligence},
  pages={297--309},
  year={2015},
  organization={Springer International Publishing}
}
@inproceedings{mcguinness2016multiple,
  title={Multiple pass Monte Carlo tree search},
  author={McGuinness, Cameron},
  booktitle={Evolutionary Computation (CEC), 2016 IEEE Congress on},
  pages={1555--1561},
  year={2016},
  organization={IEEE}
}
@inproceedings{ashlock2015interactive,
  title={Interactive evolution instead of default parameters},
  author={Ashlock, Daniel and McGuinness, Cameron and O'Neill, Joseph},
  booktitle={Computational Intelligence in Bioinformatics and Computational Biology (CIBCB), 2015 IEEE Conference on},
  pages={1--8},
  year={2015},
  organization={IEEE}
}
@inproceedings{ashlock2015chaos,
  title={Chaos automata for sequence visualization},
  author={Ashlock, Daniel and McGuinness, Cameron and Ashlock, Wendy},
  booktitle={Computational Intelligence in Bioinformatics and Computational Biology (CIBCB), 2015 IEEE Conference on},
  pages={1--8},
  year={2015},
  organization={IEEE}
}
@article{ashlock2graph,
  title={Graph-Based Search for Game Design},
  author={Ashlock, Daniel and McGuinness, Cameron},
  journal={Game \& Puzzle Design, vol. 2, no. 2, 2016 (Colour)},
  pages={68},
  publisher={Lulu. com}
}
`;

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-bibliography Demo</h1>
      <Component bibtex={bib}/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
