import { Button } from 'react-bootstrap';

export default function FeedbackOptions({
  onGoodClick,
  onNeutralClick,
  onBadClick,
}) {
  return (
    <>
      <Button variant="secondary" onClick={onGoodClick}>
        Good
      </Button>{' '}
      <Button variant="secondary" onClick={onNeutralClick}>
        Neutral
      </Button>{' '}
      <Button variant="secondary" onClick={onBadClick}>
        Bad
      </Button>{' '}
    </>
  );
}
