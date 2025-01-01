import PropTypes from 'prop-types';
import { IntemContainer } from './styles'

 
export default function IntemRepo({repo}) {
  return (
      <IntemContainer>
          <h3>{repo.name}</h3>
          <p>{ repo.full_name }</p>
          <a href={repo.html_url} target='_blank'>Ver Repositorio</a>
          <br />    
          <a href="#" className='remover'>Remover</a>
          <hr />
      </IntemContainer>
  );
};

IntemRepo.propTypes = {
    repo: PropTypes.object.isRequired
}