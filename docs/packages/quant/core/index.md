---
id: quant_core
title: Core
---

# quant/core

Low-level API providing contracts, base classes and commonly-used functionality.


## Installation

**quant/core** comes bundled with **quant**. To install it separately, follow the [installation instructions](/docs/installation#packages).

## Available Documentation

| Name                                                           | Description                                                                                        |
|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [AbstractList](/docs/packages/quant/core/abstractlist)         | A strongly typed list maintaining objects by a numeric index.                                      |
| [AccessorTrait](/docs/packages/quant/core/trait/accessortrait) | Provides accessor automation for object properties attributed with `#[Setter]` and/or `#[Getter]`. |
| [Arrayable](/docs/packages/quant/core/contract/arrayable)      | Indicates the availability of an array-representative for the implementing class' instance.        |
| [Comparable](/docs/packages/quant/core/contract/comparable)    | Implements a total order on objects of `T : Comparable`.                                           |
| [Equatable](/docs/packages/quant/core/contract/equatable)      | Implements an equivalence relation for objects of `T : Equatable`                                  |


## Benchmarks
**quant/core** uses [phpbench](https://github.com/phpbench/phpbench) for benchmarking selected functionality of this package. The command

````bash
$ vendor/bin/phpbench run Tests/Benchmarks --report=aggregate --retry-threshold=5
````

starts the Benchmarks. Please consult the [documentation](https://phpbench.readthedocs.io/) for details on how to configure the benchmark-runner to your needs.


## Resources

* [Report issues](https://github.com/quant-php/quant/issues) and
  [send Pull Requests](https://github.com/quant-php/quant/pulls)
  in the [main quant repository](https://github.com/quant-php/quant)

* A writeup and closer look at the `AccessorTrait` can be found at [https://thorsten.suckow-homberg.de](https://thorsten.suckow-homberg.de/docs/articles/getter-setter-automation-with-php-attributes)