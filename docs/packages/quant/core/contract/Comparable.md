---
id: comparable
title: Comparable
slug: /packages/quant/core/contract/comparable
---

Reference

## Definition
Namespace: `Quant\Core\Contract`

`Comparable` implements a total order for objects.

```php
interface Comparable
```

## Example

```php
#[Getter]
class Money implements Comparable {

    use AccessorTrait;
    
    public function __construct(
        private int $amount,
        private int $cents
    ) {
    } 

    public function compareTo(Comparable $b): array
    {
        if (!($b instanceof Money)) {
            return false;
        }
        
        $aAmount = $this->getAmount();
        $bAmount = $b->getAmount();
        
        $aCents = $this->getCents();
        $bCents = $b->getCents();
        
        
        $c = ($aAmount === $bAmount ? 0 : ($aAmount < $bAmount ? -1 : 1));
        
        return $c !== 0 ?  $c : ($aCents < $bCents ? -1 : ($aCents > $bCents ? 1 : 0));
    }

}

```

## Remarks

This interface implements a total order on `T` for objects of `T`, with `T` being a subtype of `Comparable`. It provides a method `compareTo` whose implementation must, for all $a, b \in T$, conform to 
 - $(a \in T) \space \lt \space  (b \in T) :\iff a$`->`$compareTo(b) = -1$ 
 - $(a \in T) \space = \space  (b \in T) :\iff a$`->`$compareTo(b) = 0$ 
 - $(a \in T) \space \gt \space  (b \in T) :\iff a$`->`$compareTo(b) = 1$

In this regard, `compareTo` is

- reflexive: `$a->compareTo($a)` $=0$
- antisymmetric: `$a->compareTo($b)` $\le 0$ $\land$ `$b->compareTo($a)` $\le 0$ $\implies$ `$a->compareTo($b)` $=0$
- transitive: `$a->compareTo($b)` $\le 0$ $\land$ `$b->compareTo($c)` $\le 0$ $\implies$ `$a->compareTo($c)` $\le 0$
- total: `$a->compareTo($b)` $\in \{-1, 0, 1\} \lor$ `$b->compareTo($a)` $\in \{-1, 0, 1\}$

The order should be consistent with objects implementing `Equatable`: If `$a->equals($b)` $\implies$ `$a->compareTo($b)` $=0$

## Methods

| Name                              | Description                                                                                                                                |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `compareTo(Comparable $obj): int` | Returns `-1` if `$this` is considered to be less than `$obj`, `0` if it's equal and `1` if `$this` is considered to be greater than `$obj` |
