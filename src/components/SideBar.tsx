import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: Array<
    {
      id: number;
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
      title: string;
    }
  >;
  onClick: any;
  selected: number;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClick(genre.id)}
            selected={props.selected === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}