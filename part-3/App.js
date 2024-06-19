const App = () => (
    <div>
        <Person
            name="Jennifer Lee"
            age={24}
            hobbies={['guitar', 'hiking', 'pilates']}
        />
        <Person
            name="Kitty"
            age={12}
            hobbies={['walks', 'car rides', 'eating']}
        />
        <Person
            name="Margie"
            age={63}
            hobbies={['zumba', 'cooking', 'puzzles']}
        />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);
