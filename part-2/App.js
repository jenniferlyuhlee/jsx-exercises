const App = () => (
    <div>
        <Tweet 
            name="Jennifer"
            username="jenUser"
            date={new Date().toDateString()}
            message="My first tweet!"
        />
        <Tweet 
            name="Kitty"
            username="kvblee"
            date={new Date().toDateString()}
            message="I love walks."
        />
        <Tweet 
            name="Bam"
            username="bam_bam"
            date={new Date().toDateString()}
            message="Kitty is my best friend!"
        />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);
