
import React from 'react';

class GenreSelect  extends React.Component {
  constructor(props) {
    super(props);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.state = {
      selectedGenre: this.props.selectedGenre
    };
  }

  handleGenreSelect(genre) {
    this.setState({ selectedGenre: genre });
    this.props.onSelect(genre);
  }

  render() {
 const { genreList } = this.props;
    const { selectedGenre } = this.state;

    const genreButtons = genreList.map(genre => {
      return React.createElement('button', {
        key: genre,
        onClick: () => this.handleGenreSelect(genre),
        style: {
          backgroundColor: selectedGenre === genre ? 'lightgray' : 'white'
        }
      }, genre);
    });

    return React.createElement('div', null, genreButtons);
  }
}
export default GenreSelect;

