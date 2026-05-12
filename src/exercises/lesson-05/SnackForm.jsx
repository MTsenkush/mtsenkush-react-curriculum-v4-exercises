import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({ onAddSnack, onUpdateSnack, editingSnack }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(String(editingSnack.rating));
    } else {
      setName('');
      setRating('');
    }
    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  const validateName = () => name.trim() !== '';
  const validateRating = () => {
    return rating >= 1 && rating <= 5;
  };

  const getNameError = () => {
    return !validateName() && touched.name ? 'Snack name is required' : '';
  };

  const getRatingError = () => {
    return !validateRating() && touched.rating ? 'Please select a rating' : '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName() || !validateRating()) {
      setTouched({ name: true, rating: true });
      return;
    }

    const snackInput = {
      name: name.trim(),
      rating,
    };

    if (editingSnack) {
      onUpdateSnack({ ...editingSnack, ...snackInput });
    } else {
      onAddSnack(snackInput);
      setName('');
      setRating('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <input
          className={styles['field-input']}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          placeholder="Snack name"
        />

        {getNameError() && (
          <span className={styles.error}>{getNameError()}</span>
        )}
      </div>

      <div>
        <input
          className={styles['field-input']}
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          placeholder="Rating (1-5)"
        />

        {getRatingError() && (
          <span className={styles.error}>{getRatingError()}</span>
        )}
      </div>

      <button type="submit" className={styles['button']}>
        {editingSnack ? 'Update Snack' : 'Add Snack'}
      </button>
    </form>
  );
}
