export default function Validate(gameData) {
  let errors = {};
  if (gameData.name.trim().length === 0) {
    errors.name = "The name field cannot be empty";
  } else if (gameData.name.trim().length > 40) {
    errors.name = "The name must have more than 40 characters";
  }
  if (gameData.image.trim().length === 0) {
    errors.image = "Must insert an image";
  }
  if (gameData.description.trim().length === 0) {
    errors.description = "The description must have at least 40 characters";
  } else if (gameData.description.trim().length < 40) {
    errors.description = "The description must have at least 40 characters";
  }
  if (gameData.platforms.trim().length === 0) {
    errors.platforms = "Must include 1 platform";
  } else if (gameData.platforms.trim().includes(" ")) {
    errors.platforms = "Only one platform";
  }
  if (gameData.release_date.trim().length === 0) {
    errors.release_date = "Insert a date";
  }
  if (gameData.rating.trim().length === 0) {
    errors.rating = "Must include a rating and be a number";
  } else if (Number(gameData.rating) < 0 || Number(gameData.rating) > 5) {
    errors.rating = "Must be a number between 0 and 5";
  }
  if (gameData.genres.length === 0) {
    errors.genres = "Select at least 1 genre";
  }

  return errors;
}
