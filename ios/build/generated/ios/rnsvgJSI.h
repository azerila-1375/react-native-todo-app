/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleH.js
 */

#pragma once

#include <ReactCommon/TurboModule.h>
#include <react/bridging/Bridging.h>

namespace facebook::react {


  
#pragma mark - RNSVGRenderableModuleBasePoint

template <typename P0, typename P1>
struct [[deprecated("Use RNSVGRenderableModulePoint instead.")]] RNSVGRenderableModuleBasePoint {
  P0 x;
  P1 y;
  bool operator==(const RNSVGRenderableModuleBasePoint &other) const {
    return x == other.x && y == other.y;
  }
};

template <typename P0, typename P1>
struct [[deprecated("Use RNSVGRenderableModulePointBridging instead.")]] RNSVGRenderableModuleBasePointBridging {
  static RNSVGRenderableModuleBasePoint<P0, P1> fromJs(
      jsi::Runtime &rt,
      const jsi::Object &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    RNSVGRenderableModuleBasePoint<P0, P1> result{
      bridging::fromJs<P0>(rt, value.getProperty(rt, "x"), jsInvoker),
      bridging::fromJs<P1>(rt, value.getProperty(rt, "y"), jsInvoker)};
    return result;
  }

#ifdef DEBUG
  static double xToJs(jsi::Runtime &rt, P0 value) {
    return bridging::toJs(rt, value);
  }

  static double yToJs(jsi::Runtime &rt, P1 value) {
    return bridging::toJs(rt, value);
  }
#endif

  static jsi::Object toJs(
      jsi::Runtime &rt,
      const RNSVGRenderableModuleBasePoint<P0, P1> &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    auto result = facebook::jsi::Object(rt);
    result.setProperty(rt, "x", bridging::toJs(rt, value.x, jsInvoker));
    result.setProperty(rt, "y", bridging::toJs(rt, value.y, jsInvoker));
    return result;
  }
};



#pragma mark - RNSVGRenderableModuleBaseRect

template <typename P0, typename P1, typename P2, typename P3>
struct [[deprecated("Use RNSVGRenderableModuleRect instead.")]] RNSVGRenderableModuleBaseRect {
  P0 x;
  P1 y;
  P2 width;
  P3 height;
  bool operator==(const RNSVGRenderableModuleBaseRect &other) const {
    return x == other.x && y == other.y && width == other.width && height == other.height;
  }
};

template <typename P0, typename P1, typename P2, typename P3>
struct [[deprecated("Use RNSVGRenderableModuleRectBridging instead.")]] RNSVGRenderableModuleBaseRectBridging {
  static RNSVGRenderableModuleBaseRect<P0, P1, P2, P3> fromJs(
      jsi::Runtime &rt,
      const jsi::Object &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    RNSVGRenderableModuleBaseRect<P0, P1, P2, P3> result{
      bridging::fromJs<P0>(rt, value.getProperty(rt, "x"), jsInvoker),
      bridging::fromJs<P1>(rt, value.getProperty(rt, "y"), jsInvoker),
      bridging::fromJs<P2>(rt, value.getProperty(rt, "width"), jsInvoker),
      bridging::fromJs<P3>(rt, value.getProperty(rt, "height"), jsInvoker)};
    return result;
  }

#ifdef DEBUG
  static double xToJs(jsi::Runtime &rt, P0 value) {
    return bridging::toJs(rt, value);
  }

  static double yToJs(jsi::Runtime &rt, P1 value) {
    return bridging::toJs(rt, value);
  }

  static double widthToJs(jsi::Runtime &rt, P2 value) {
    return bridging::toJs(rt, value);
  }

  static double heightToJs(jsi::Runtime &rt, P3 value) {
    return bridging::toJs(rt, value);
  }
#endif

  static jsi::Object toJs(
      jsi::Runtime &rt,
      const RNSVGRenderableModuleBaseRect<P0, P1, P2, P3> &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    auto result = facebook::jsi::Object(rt);
    result.setProperty(rt, "x", bridging::toJs(rt, value.x, jsInvoker));
    result.setProperty(rt, "y", bridging::toJs(rt, value.y, jsInvoker));
    result.setProperty(rt, "width", bridging::toJs(rt, value.width, jsInvoker));
    result.setProperty(rt, "height", bridging::toJs(rt, value.height, jsInvoker));
    return result;
  }
};



#pragma mark - RNSVGRenderableModuleBaseMatrix

template <typename P0, typename P1, typename P2, typename P3, typename P4, typename P5>
struct [[deprecated("Use RNSVGRenderableModuleMatrix instead.")]] RNSVGRenderableModuleBaseMatrix {
  P0 a;
  P1 b;
  P2 c;
  P3 d;
  P4 e;
  P5 f;
  bool operator==(const RNSVGRenderableModuleBaseMatrix &other) const {
    return a == other.a && b == other.b && c == other.c && d == other.d && e == other.e && f == other.f;
  }
};

template <typename P0, typename P1, typename P2, typename P3, typename P4, typename P5>
struct [[deprecated("Use RNSVGRenderableModuleMatrixBridging instead.")]] RNSVGRenderableModuleBaseMatrixBridging {
  static RNSVGRenderableModuleBaseMatrix<P0, P1, P2, P3, P4, P5> fromJs(
      jsi::Runtime &rt,
      const jsi::Object &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    RNSVGRenderableModuleBaseMatrix<P0, P1, P2, P3, P4, P5> result{
      bridging::fromJs<P0>(rt, value.getProperty(rt, "a"), jsInvoker),
      bridging::fromJs<P1>(rt, value.getProperty(rt, "b"), jsInvoker),
      bridging::fromJs<P2>(rt, value.getProperty(rt, "c"), jsInvoker),
      bridging::fromJs<P3>(rt, value.getProperty(rt, "d"), jsInvoker),
      bridging::fromJs<P4>(rt, value.getProperty(rt, "e"), jsInvoker),
      bridging::fromJs<P5>(rt, value.getProperty(rt, "f"), jsInvoker)};
    return result;
  }

#ifdef DEBUG
  static double aToJs(jsi::Runtime &rt, P0 value) {
    return bridging::toJs(rt, value);
  }

  static double bToJs(jsi::Runtime &rt, P1 value) {
    return bridging::toJs(rt, value);
  }

  static double cToJs(jsi::Runtime &rt, P2 value) {
    return bridging::toJs(rt, value);
  }

  static double dToJs(jsi::Runtime &rt, P3 value) {
    return bridging::toJs(rt, value);
  }

  static double eToJs(jsi::Runtime &rt, P4 value) {
    return bridging::toJs(rt, value);
  }

  static double fToJs(jsi::Runtime &rt, P5 value) {
    return bridging::toJs(rt, value);
  }
#endif

  static jsi::Object toJs(
      jsi::Runtime &rt,
      const RNSVGRenderableModuleBaseMatrix<P0, P1, P2, P3, P4, P5> &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    auto result = facebook::jsi::Object(rt);
    result.setProperty(rt, "a", bridging::toJs(rt, value.a, jsInvoker));
    result.setProperty(rt, "b", bridging::toJs(rt, value.b, jsInvoker));
    result.setProperty(rt, "c", bridging::toJs(rt, value.c, jsInvoker));
    result.setProperty(rt, "d", bridging::toJs(rt, value.d, jsInvoker));
    result.setProperty(rt, "e", bridging::toJs(rt, value.e, jsInvoker));
    result.setProperty(rt, "f", bridging::toJs(rt, value.f, jsInvoker));
    return result;
  }
};


#pragma mark - RNSVGRenderableModulePoint

template <typename P0, typename P1>
struct RNSVGRenderableModulePoint {
  P0 x;
  P1 y;
  bool operator==(const RNSVGRenderableModulePoint &other) const {
    return x == other.x && y == other.y;
  }
};

template <typename T>
struct RNSVGRenderableModulePointBridging {
  static T types;

  static T fromJs(
      jsi::Runtime &rt,
      const jsi::Object &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    T result{
      bridging::fromJs<decltype(types.x)>(rt, value.getProperty(rt, "x"), jsInvoker),
      bridging::fromJs<decltype(types.y)>(rt, value.getProperty(rt, "y"), jsInvoker)};
    return result;
  }

#ifdef DEBUG
  static double xToJs(jsi::Runtime &rt, decltype(types.x) value) {
    return bridging::toJs(rt, value);
  }

  static double yToJs(jsi::Runtime &rt, decltype(types.y) value) {
    return bridging::toJs(rt, value);
  }
#endif

  static jsi::Object toJs(
      jsi::Runtime &rt,
      const T &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    auto result = facebook::jsi::Object(rt);
    result.setProperty(rt, "x", bridging::toJs(rt, value.x, jsInvoker));
    result.setProperty(rt, "y", bridging::toJs(rt, value.y, jsInvoker));
    return result;
  }
};



#pragma mark - RNSVGRenderableModuleRect

template <typename P0, typename P1, typename P2, typename P3>
struct RNSVGRenderableModuleRect {
  P0 x;
  P1 y;
  P2 width;
  P3 height;
  bool operator==(const RNSVGRenderableModuleRect &other) const {
    return x == other.x && y == other.y && width == other.width && height == other.height;
  }
};

template <typename T>
struct RNSVGRenderableModuleRectBridging {
  static T types;

  static T fromJs(
      jsi::Runtime &rt,
      const jsi::Object &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    T result{
      bridging::fromJs<decltype(types.x)>(rt, value.getProperty(rt, "x"), jsInvoker),
      bridging::fromJs<decltype(types.y)>(rt, value.getProperty(rt, "y"), jsInvoker),
      bridging::fromJs<decltype(types.width)>(rt, value.getProperty(rt, "width"), jsInvoker),
      bridging::fromJs<decltype(types.height)>(rt, value.getProperty(rt, "height"), jsInvoker)};
    return result;
  }

#ifdef DEBUG
  static double xToJs(jsi::Runtime &rt, decltype(types.x) value) {
    return bridging::toJs(rt, value);
  }

  static double yToJs(jsi::Runtime &rt, decltype(types.y) value) {
    return bridging::toJs(rt, value);
  }

  static double widthToJs(jsi::Runtime &rt, decltype(types.width) value) {
    return bridging::toJs(rt, value);
  }

  static double heightToJs(jsi::Runtime &rt, decltype(types.height) value) {
    return bridging::toJs(rt, value);
  }
#endif

  static jsi::Object toJs(
      jsi::Runtime &rt,
      const T &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    auto result = facebook::jsi::Object(rt);
    result.setProperty(rt, "x", bridging::toJs(rt, value.x, jsInvoker));
    result.setProperty(rt, "y", bridging::toJs(rt, value.y, jsInvoker));
    result.setProperty(rt, "width", bridging::toJs(rt, value.width, jsInvoker));
    result.setProperty(rt, "height", bridging::toJs(rt, value.height, jsInvoker));
    return result;
  }
};



#pragma mark - RNSVGRenderableModuleMatrix

template <typename P0, typename P1, typename P2, typename P3, typename P4, typename P5>
struct RNSVGRenderableModuleMatrix {
  P0 a;
  P1 b;
  P2 c;
  P3 d;
  P4 e;
  P5 f;
  bool operator==(const RNSVGRenderableModuleMatrix &other) const {
    return a == other.a && b == other.b && c == other.c && d == other.d && e == other.e && f == other.f;
  }
};

template <typename T>
struct RNSVGRenderableModuleMatrixBridging {
  static T types;

  static T fromJs(
      jsi::Runtime &rt,
      const jsi::Object &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    T result{
      bridging::fromJs<decltype(types.a)>(rt, value.getProperty(rt, "a"), jsInvoker),
      bridging::fromJs<decltype(types.b)>(rt, value.getProperty(rt, "b"), jsInvoker),
      bridging::fromJs<decltype(types.c)>(rt, value.getProperty(rt, "c"), jsInvoker),
      bridging::fromJs<decltype(types.d)>(rt, value.getProperty(rt, "d"), jsInvoker),
      bridging::fromJs<decltype(types.e)>(rt, value.getProperty(rt, "e"), jsInvoker),
      bridging::fromJs<decltype(types.f)>(rt, value.getProperty(rt, "f"), jsInvoker)};
    return result;
  }

#ifdef DEBUG
  static double aToJs(jsi::Runtime &rt, decltype(types.a) value) {
    return bridging::toJs(rt, value);
  }

  static double bToJs(jsi::Runtime &rt, decltype(types.b) value) {
    return bridging::toJs(rt, value);
  }

  static double cToJs(jsi::Runtime &rt, decltype(types.c) value) {
    return bridging::toJs(rt, value);
  }

  static double dToJs(jsi::Runtime &rt, decltype(types.d) value) {
    return bridging::toJs(rt, value);
  }

  static double eToJs(jsi::Runtime &rt, decltype(types.e) value) {
    return bridging::toJs(rt, value);
  }

  static double fToJs(jsi::Runtime &rt, decltype(types.f) value) {
    return bridging::toJs(rt, value);
  }
#endif

  static jsi::Object toJs(
      jsi::Runtime &rt,
      const T &value,
      const std::shared_ptr<CallInvoker> &jsInvoker) {
    auto result = facebook::jsi::Object(rt);
    result.setProperty(rt, "a", bridging::toJs(rt, value.a, jsInvoker));
    result.setProperty(rt, "b", bridging::toJs(rt, value.b, jsInvoker));
    result.setProperty(rt, "c", bridging::toJs(rt, value.c, jsInvoker));
    result.setProperty(rt, "d", bridging::toJs(rt, value.d, jsInvoker));
    result.setProperty(rt, "e", bridging::toJs(rt, value.e, jsInvoker));
    result.setProperty(rt, "f", bridging::toJs(rt, value.f, jsInvoker));
    return result;
  }
};

class JSI_EXPORT NativeSvgRenderableModuleCxxSpecJSI : public TurboModule {
protected:
  NativeSvgRenderableModuleCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker);

public:
  virtual bool isPointInFill(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options) = 0;
  virtual bool isPointInStroke(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options) = 0;
  virtual double getTotalLength(jsi::Runtime &rt, std::optional<int> tag) = 0;
  virtual jsi::Object getPointAtLength(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options) = 0;
  virtual jsi::Object getBBox(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options) = 0;
  virtual jsi::Object getCTM(jsi::Runtime &rt, std::optional<int> tag) = 0;
  virtual jsi::Object getScreenCTM(jsi::Runtime &rt, std::optional<int> tag) = 0;
  virtual jsi::Value getRawResource(jsi::Runtime &rt, jsi::String name) = 0;

};

template <typename T>
class JSI_EXPORT NativeSvgRenderableModuleCxxSpec : public TurboModule {
public:
  jsi::Value get(jsi::Runtime &rt, const jsi::PropNameID &propName) override {
    return delegate_.get(rt, propName);
  }

  static constexpr std::string_view kModuleName = "RNSVGRenderableModule";

protected:
  NativeSvgRenderableModuleCxxSpec(std::shared_ptr<CallInvoker> jsInvoker)
    : TurboModule(std::string{NativeSvgRenderableModuleCxxSpec::kModuleName}, jsInvoker),
      delegate_(reinterpret_cast<T*>(this), jsInvoker) {}

private:
  class Delegate : public NativeSvgRenderableModuleCxxSpecJSI {
  public:
    Delegate(T *instance, std::shared_ptr<CallInvoker> jsInvoker) :
      NativeSvgRenderableModuleCxxSpecJSI(std::move(jsInvoker)), instance_(instance) {}

    bool isPointInFill(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options) override {
      static_assert(
          bridging::getParameterCount(&T::isPointInFill) == 3,
          "Expected isPointInFill(...) to have 3 parameters");

      return bridging::callFromJs<bool>(
          rt, &T::isPointInFill, jsInvoker_, instance_, std::move(tag), std::move(options));
    }
    bool isPointInStroke(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options) override {
      static_assert(
          bridging::getParameterCount(&T::isPointInStroke) == 3,
          "Expected isPointInStroke(...) to have 3 parameters");

      return bridging::callFromJs<bool>(
          rt, &T::isPointInStroke, jsInvoker_, instance_, std::move(tag), std::move(options));
    }
    double getTotalLength(jsi::Runtime &rt, std::optional<int> tag) override {
      static_assert(
          bridging::getParameterCount(&T::getTotalLength) == 2,
          "Expected getTotalLength(...) to have 2 parameters");

      return bridging::callFromJs<double>(
          rt, &T::getTotalLength, jsInvoker_, instance_, std::move(tag));
    }
    jsi::Object getPointAtLength(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options) override {
      static_assert(
          bridging::getParameterCount(&T::getPointAtLength) == 3,
          "Expected getPointAtLength(...) to have 3 parameters");

      return bridging::callFromJs<jsi::Object>(
          rt, &T::getPointAtLength, jsInvoker_, instance_, std::move(tag), std::move(options));
    }
    jsi::Object getBBox(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options) override {
      static_assert(
          bridging::getParameterCount(&T::getBBox) == 3,
          "Expected getBBox(...) to have 3 parameters");

      return bridging::callFromJs<jsi::Object>(
          rt, &T::getBBox, jsInvoker_, instance_, std::move(tag), std::move(options));
    }
    jsi::Object getCTM(jsi::Runtime &rt, std::optional<int> tag) override {
      static_assert(
          bridging::getParameterCount(&T::getCTM) == 2,
          "Expected getCTM(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Object>(
          rt, &T::getCTM, jsInvoker_, instance_, std::move(tag));
    }
    jsi::Object getScreenCTM(jsi::Runtime &rt, std::optional<int> tag) override {
      static_assert(
          bridging::getParameterCount(&T::getScreenCTM) == 2,
          "Expected getScreenCTM(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Object>(
          rt, &T::getScreenCTM, jsInvoker_, instance_, std::move(tag));
    }
    jsi::Value getRawResource(jsi::Runtime &rt, jsi::String name) override {
      static_assert(
          bridging::getParameterCount(&T::getRawResource) == 2,
          "Expected getRawResource(...) to have 2 parameters");

      return bridging::callFromJs<jsi::Value>(
          rt, &T::getRawResource, jsInvoker_, instance_, std::move(name));
    }

  private:
    T *instance_;
  };

  Delegate delegate_;
};


  class JSI_EXPORT NativeSvgViewModuleCxxSpecJSI : public TurboModule {
protected:
  NativeSvgViewModuleCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker);

public:
  virtual void toDataURL(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options, std::optional<jsi::Function> callback) = 0;

};

template <typename T>
class JSI_EXPORT NativeSvgViewModuleCxxSpec : public TurboModule {
public:
  jsi::Value get(jsi::Runtime &rt, const jsi::PropNameID &propName) override {
    return delegate_.get(rt, propName);
  }

  static constexpr std::string_view kModuleName = "RNSVGSvgViewModule";

protected:
  NativeSvgViewModuleCxxSpec(std::shared_ptr<CallInvoker> jsInvoker)
    : TurboModule(std::string{NativeSvgViewModuleCxxSpec::kModuleName}, jsInvoker),
      delegate_(reinterpret_cast<T*>(this), jsInvoker) {}

private:
  class Delegate : public NativeSvgViewModuleCxxSpecJSI {
  public:
    Delegate(T *instance, std::shared_ptr<CallInvoker> jsInvoker) :
      NativeSvgViewModuleCxxSpecJSI(std::move(jsInvoker)), instance_(instance) {}

    void toDataURL(jsi::Runtime &rt, std::optional<int> tag, std::optional<jsi::Object> options, std::optional<jsi::Function> callback) override {
      static_assert(
          bridging::getParameterCount(&T::toDataURL) == 4,
          "Expected toDataURL(...) to have 4 parameters");

      return bridging::callFromJs<void>(
          rt, &T::toDataURL, jsInvoker_, instance_, std::move(tag), std::move(options), std::move(callback));
    }

  private:
    T *instance_;
  };

  Delegate delegate_;
};

} // namespace facebook::react
