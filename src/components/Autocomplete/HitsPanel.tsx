import { HitsPanelProps } from '../../types/Hit'
import './HitsPanel.css'

type HighlightedProps = {
  text: string, 
  highlight: string,
}

const Highlighted = (props: HighlightedProps) => {
  if (!props.highlight.trim()) {
    return <span>{props.text}</span>
  }
  
  const regex = new RegExp(`(${props.highlight})`, 'gi')
  const parts = props.text.split(regex)
  return (
    <span>
      {parts.filter(part => part).map((part, i) => (
        regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
      ))}
   </span>
  )
}

const HitsPanel = (props: HitsPanelProps) => {
  return props.filteredHits.length 
    ? 
      (
        <div className='hits-panel'>
          <ul>
            { 
              props.filteredHits.map((hit, index) => {
                return (
                  <li className={props.currentIndex === index ? 'selected' : 'normal'} key={hit.id} onClick={ () => props.setInput(hit.title) }>
                    <span className={hit.completed ? 'completed' : ''}>
                      <Highlighted text={hit.title} highlight={props.searchTerm} />
                    </span>
                  </li>
                );
              })
            }
          </ul>
        </div>
      ) 
    : 
      (
        <div className="no-hit">
          <em>Results not found, try another term ;/</em>
        </div>
      );
};

export default HitsPanel;