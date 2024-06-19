const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Jennifer"/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);
