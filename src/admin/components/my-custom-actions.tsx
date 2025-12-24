import { ActionProps } from 'adminjs';

const MyCustomAction = (props: ActionProps) => {
  const { record } = props;

  return (
    <div>
      <div>
        <div>Example of a simple page</div>
        <p>Where you can put almost everything</p>
        <p>like this:</p>
        <p>
          <img
            src="https://i.redd.it/rd39yuiy9ns21.jpg"
            alt="stupid cat"
            width={300}
          />
        </p>
      </div>
      <div>
        <p>Or (more likely), operate on a returned record:</p>
        <div>{JSON.stringify(record)}</div>
      </div>
    </div>
  );
};

export default MyCustomAction;
