---
id: equatable
title: Equatable
slug: /packages/quant/core/contract/equatable
---

Reference

## Definition
Namespace: `Quant\Core\Contract`

`Equatable` implements an equivalence relation for objects.

```php
interface Equatable
```

## Example

```php
#[Getter]
class Point implements Equatable {

    use AccessorTrait;
    
    public function __construct(
        private float $x,
        private float $y
    ) {
    } 

    public function equals(Equatable $b): array
    {
        return ($b instanceof Point) && $b->getX() === $this->getX() && $b->getY() === $this->getY();
    }

}

```

## Remarks

This interface implements an equivalence relation for objects of `T`, with `T` being a subtype of `Comparable`. 
It provides a method `equals` whose implementation must, for all $a, b, c \in T$, conform to $(a \in T) \space \thicksim \space  (b \in T) :\iff a$`->`$equals(b)$, that is

- reflexive: `$a->equals($a) === true`
- symmetric: `$a->equals($b) === true` $\implies$ `$b->equals($a) === true`
- transitive: `$a->equals($b) === true` $\land$ `$b->equals($c) === true` $\implies$ `$a->equals($c) === true`

## Methods

| Name                           | Description                                                                                                                               |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `equals(Equatable $obj): bool` | Returns `true` if `$b` is considered equal to the implementing class' instance |
