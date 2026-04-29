import BugStrictMode from './BugStrictMode';
import FindCorrectHook from './FindCorrectHook';
import BugEventPropagation from './BugEventPropagation';
import FillRefFocus from './FillRefFocus';
import BugChildParentCommunication from './BugChildParentCommuncation/BugChildParentCommunication';
export default function StudentWork() {
  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <BugStrictMode />
      <hr />
      <h2>useRef vs useState Decision</h2>
      <FindCorrectHook />
      <hr />
      <h2>Stopping Event Propagation</h2>
      <BugEventPropagation />
      <hr />
      <h2>useRef: Focusing an Input</h2>
      <FillRefFocus />
      <hr />
      <h2>Parent-Child Communication</h2>
      <BugChildParentCommunication />
    </div>
  );
}
