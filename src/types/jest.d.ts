declare global {
  namespace jest {
    interface Matchers<R> {
      toEndWith(value: string): CustomMatcherResult;
    }
  }
}
