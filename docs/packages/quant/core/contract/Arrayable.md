---
id: arrayable
title: Arrayable
slug: /packages/quant/core/contract/arrayable
---

Reference

## Definition
Namespace: `Quant\Core\Contract`

`Arrayable` indicates the availability of an array-representative for the implementing class' instance.

```php
interface Arrayable
```

## Example

```php
class Point implements Arrayable {

    public function __construct(
        private float $x,
        private float $y
    ) {
    } 

    public function toArray(): array
    {
        return [
            "x" => $this->x,
            "y" => $this->y
        ];       
    }

}

```


## Methods

| Name                           | Description                                                         |
|--------------------------------|---------------------------------------------------------------------|
| `toArray(): array<int, mixed>` | Returns an array representation of the implementing class' instance |
