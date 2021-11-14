import { SocialEditor } from '@remirror/react-editors/social';
const USERS = [
  { id: 'blackgirlbytes', label: 'blackgirlbytes' },
  { id: 'redscarlett', label: 'redscarlett' },
  { id: 'jadenguitarman', label: 'jadenguitarman' },

];
const TAGS = ['remirror', 'editor', 'opensource', 'ganggang', 'javascript'];
function App() {
  return (
    <div style={{ padding: 16 }}>
      <SocialEditor placeholder="Write a message" users={USERS} tags={TAGS} />
    </div>
  );
}
export default App;