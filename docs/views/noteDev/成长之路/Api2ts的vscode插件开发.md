---
title: Api2ts 的 vscode 插件开发
date: 2022-07-04
tags:
  - 成长之路
categories:
  - 成长之路
permalink: /20220704
---

## 开篇

在一次开发业务需求的时候，与后端联调接口，每次都要复制一遍接口的 response 数据进行 type 定义，这种 cv 的重复工作，着实令人头疼，于是就上网搜，有没有一个插件，能够帮我自动发接口请求，并将返回来的数据自动生成一份 ts 类型文件。一开始找了好几个插件，结果都不是很满意，要么就是插件不生效，要么就是场景不符合，迫不得已，萌发了自己要不开发个插件试试。于是学了下 vscode 插件开发的流程，以此来实现自己的需求。

### Api2ts 核心逻辑

<img :src="$withBase('/assets/20220705/flow-core.png')" alt=""></img>

### 下一步计划

首先看看我自己封装的请求器：

```ts
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
export default async (options: AxiosRequestConfig) => {
  // 创建一个axios实例
  const axiosConfig = {
    ...options,
    withCredentials: true,
    headers: {
      ...options.headers,
      'Content-Type': options.headers
        ? options.headers['Content-Type']
          ? options.headers['Content-Type']
          : 'application/json'
        : 'application/json',
      token: (options as any).token,
    },
  };

  const instance: AxiosInstance = axios.create(axiosConfig);

  return await instance.request(axiosConfig);
};
```

::: tip
这一份 axiosConfig 虽然是差不多融合众多场景的配置项，但很多场景下，这份配置可能达不到用户的需求，后面会开放使用用户的请求配置文件进行整合。
:::

再看下 select 的文本 json，一般选择的请求配置项他是一个 axios 的请求参数，还有些额外参数，其实我习惯我的请求 api 长这样：

```ts
export async function getIndicatorsCountApi(
  id: number
): Promise<IndicatorsCountDto> {
  const request = {
    method: "post",
    service: "",
    headers: {
      "Content-Type": "application/json"
    },
    url: "/tool/createTool/indicators/getCount",
    data: { ctParameterCategoryId: id }
  } as const;
  try {
    const response = await $http<IndicatorsCountDto>(request);
    console.log(
      "%c [ response ]",
      "font-size:13px; background:pink; color:#bf2c9f;",
      response
    );
    if (response.code === 0 || response.errorcode === 0) {
      console.log(response);
      return response.data;
    }
    throw response.msg ?? response.message;
  } catch (error) {
    ElMessage.error(String(error));
  }
  return {} as IndicatorsCountDto;
}
```

::: tip
这个框选的 request 这个对象，会作为 axios 的参数进行发送请求，我觉得这样是比较好的吧，但是有的项目，他的请求 api 封装可能长这样：<br>
this.fetch1.post('/api/path', { params }).catch(() => ({ result: 'error', data: {} })) <br>
这种格式是后面需要兼容的。
:::

## 总结

以上就是我开发的 Api2ts 插件的一些开发流程跟构思，对于工具类的开发，带来的成就感远远高于业务类的开发，也让我意识到功能完成需要的时间往往很短，但是后续优化迭代的过程往往会很长，作为开发者不仅仅是从开发的角度思考，还要从产品的角度出发。
