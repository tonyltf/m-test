interface ILogger {
  log: (...data: any[]) => void;
  error: (...data: any[]) => void;
}

const Logger = (): ILogger => {
  return {
    log: console.log,
    error: console.error,
  };
};

export default Logger();
