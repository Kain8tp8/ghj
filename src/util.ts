export function handleError(err: any) {
    console.error(err);
    return {
      message: 'Error retriving pupils',
      error: err
    }
  }